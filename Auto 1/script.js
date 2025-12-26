/* ----------------------------------------------------------
   Gestion du thème jour / nuit et du volet latéral
   ---------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle');
  const body = document.body;

  /* ---------- Thème ---------- */
  const setTheme = (mode) => {
    if (mode === 'night') {
      body.classList.add('night-mode');
    } else {
      body.classList.remove('night-mode');
    }
    localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => {
    const isNight = body.classList.contains('night-mode');
    setTheme(isNight ? 'day' : 'night');
  };

  /* ---------- Sidebar ---------- */
  const setSidebarState = (collapsed) => {
    if (collapsed) {
      body.classList.add('collapsed');
    } else {
      body.classList.remove('collapsed');
    }
    localStorage.setItem('sidebarCollapsed', collapsed);
  };

  const toggleSidebar = () => {
    const isCollapsed = body.classList.contains('collapsed');
    setSidebarState(isCollapsed);
  };

  /* ---------- Chargement des préférences sauvegardées ----------
     - Thème (jour ou nuit)
     - État du sidebar (replié ou affiché) */
  const savedTheme       = localStorage.getItem('theme') || 'day';
  const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

  setTheme(savedTheme);
  setSidebarState(sidebarCollapsed);

  /* ---------- Attach des événements ---------- */
  themeToggleBtn.addEventListener('click', toggleTheme);
  sidebarToggleBtn.addEventListener('click', toggleSidebar);
});
