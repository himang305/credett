/**
 * Credett Web3 Payment Gateway - Interactive Prototype Shared Script
 */

// Toast notification helper
const CredettToast = {
  container: null,
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'credett-toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(message, type = 'info', duration = 3500) {
    this.init();
    const toast = document.createElement('div');
    toast.className = `credett-toast toast-${type}`;

    let iconName = 'info';
    if (type === 'success') iconName = 'check_circle';
    if (type === 'warning') iconName = 'warning';
    if (type === 'error') iconName = 'error';

    toast.innerHTML = `
      <span class="material-symbols-outlined text-[20px] ${type === 'success' ? 'text-emerald-400' :
        type === 'warning' ? 'text-amber-400' :
          type === 'error' ? 'text-rose-400' : 'text-blue-400'
      }">${iconName}</span>
      <div class="flex-1 text-xs font-medium leading-tight">${message}</div>
      <button class="text-slate-400 hover:text-white transition-colors" onclick="this.parentElement.remove()">
        <span class="material-symbols-outlined text-[16px]">close</span>
      </button>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px) scale(0.95)';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }
};

// Clipboard copy helper
function copyToClipboard(text, label = 'Copied to clipboard') {
  navigator.clipboard.writeText(text).then(() => {
    CredettToast.show(`${label}: <span class="font-mono">${text}</span>`, 'success');
  }).catch(() => {
    CredettToast.show('Failed to copy to clipboard', 'error');
  });
}

// Mobile Sidebar toggle helper
function toggleMobileSidebar() {
  const sidebar = document.querySelector('aside');
  const backdrop = document.getElementById('mobile-sidebar-backdrop');
  if (sidebar) {
    if (sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.remove('-translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
    }
  }
}

// Floating quick switch dock
function injectDemoDock() {
  return;
  if (document.getElementById('credett-demo-dock')) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const dock = document.createElement('div');
  dock.id = 'credett-demo-dock';
  dock.innerHTML = `
    <div class="dock-badge">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Prototype
    </div>
    <a href="index.html" class="dock-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">home</span> Landing
    </a>
    <a href="auth.html" class="dock-link ${currentPath === 'auth.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">lock</span> Auth & KYB
    </a>
    <a href="merchant-dashboard.html" class="dock-link ${currentPath === 'merchant-dashboard.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">dashboard</span> Dashboard
    </a>
    <a href="merchant-payments.html" class="dock-link ${currentPath === 'merchant-payments.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">payments</span> Ledger
    </a>
    <a href="merchant-settlement.html" class="dock-link ${currentPath === 'merchant-settlement.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">tune</span> Config
    </a>
    <a href="merchant-developers.html" class="dock-link ${currentPath === 'merchant-developers.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">terminal</span> Devs
    </a>
    <a href="merchant-team.html" class="dock-link ${currentPath === 'merchant-team.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">group</span> Team (RBAC)
    </a>
    <a href="checkout.html" class="dock-link ${currentPath.startsWith('checkout.html') ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">shopping_cart</span> Checkout
    </a>
    <a href="admin-dashboard.html" class="dock-link ${currentPath === 'admin-dashboard.html' ? 'active' : ''}">
      <span class="material-symbols-outlined text-[14px]">admin_panel_settings</span> Ops Admin
    </a>
  `;
  document.body.appendChild(dock);
}

// Auto init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  injectDemoDock();
});


