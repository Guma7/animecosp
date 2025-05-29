import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Componente que faz a rolagem para o topo quando a rota muda
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollAttempts = useRef(0);
  const maxScrollAttempts = 10;

  useEffect(() => {
    // Reseta o contador de tentativas quando a rota muda
    scrollAttempts.current = 0;

    // Função para forçar a rolagem para o topo usando diferentes métodos para garantir compatibilidade
    const forceScrollToTop = () => {
      if (scrollAttempts.current >= maxScrollAttempts) return;
      scrollAttempts.current++;

      // Método 1: usando scrollTo com diferentes opções
      try {
        // Tenta com behavior: 'auto' (mais confiável)
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch (e) {
        // Fallback para o método mais simples
        window.scrollTo(0, 0);
      }
      
      // Método 2: definindo scrollTop diretamente em diferentes elementos
      if (document.documentElement) {
        document.documentElement.scrollTop = 0; // Para navegadores modernos
      }
      if (document.body) {
        document.body.scrollTop = 0; // Para navegadores mais antigos
      }
      if (window.pageYOffset > 0) {
        // Se ainda não rolou para o topo, tenta novamente
        window.scrollTo(0, 0);
      }
    };

    // Executa imediatamente
    forceScrollToTop();

    // Cria um array de tempos para tentar várias vezes com intervalos crescentes
    const scrollTimes = [0, 10, 30, 50, 100, 150, 200, 300, 400, 500];
    
    // Cria múltiplos timeouts para garantir que a rolagem ocorra
    const timeoutIds = scrollTimes.map(time => 
      setTimeout(forceScrollToTop, time)
    );

    // Adiciona eventos para rolar para o topo em diferentes momentos do ciclo de vida da página
    const handleLoad = () => forceScrollToTop();
    const handleDOMContentLoaded = () => forceScrollToTop();
    const handleReadyStateChange = () => {
      if (document.readyState === 'complete') forceScrollToTop();
    };

    // Configura um MutationObserver para detectar mudanças no DOM e rolar para o topo
    let observer = null;
    try {
      observer = new MutationObserver((mutations) => {
        // Verifica se as mutações são significativas antes de rolar
        const significantChanges = mutations.some(mutation => 
          mutation.addedNodes.length > 0 || 
          mutation.removedNodes.length > 0 ||
          mutation.type === 'attributes'
        );
        
        if (significantChanges) forceScrollToTop();
      });
      
      // Observa mudanças em todo o documento
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        characterData: false
      });
    } catch (e) {
      console.error('MutationObserver não suportado:', e);
    }

    // Adiciona os event listeners
    window.addEventListener('load', handleLoad);
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    document.addEventListener('readystatechange', handleReadyStateChange);

    // Limpeza dos timeouts e eventos quando o componente for desmontado ou a rota mudar novamente
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      document.removeEventListener('readystatechange', handleReadyStateChange);
      
      // Desconecta o observer se existir
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null; // Este componente não renderiza nada
};

export default ScrollToTop;