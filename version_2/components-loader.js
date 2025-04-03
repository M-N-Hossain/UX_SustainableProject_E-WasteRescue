// Function to load HTML components
async function loadComponent(id, path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Failed to load component: ${path}`);
        }
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${path}:`, error);
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load all components
    await loadComponent('header', './components/header.html');
    await loadComponent('hero', './components/hero.html');
    await loadComponent('statistics', './components/stats.html');
    await loadComponent('solutions', './components/solutions.html');
    await loadComponent('quote', './components/quote.html');
    await loadComponent('resources', './components/resources.html');
    await loadComponent('take-action-section', './components/action.html');
    await loadComponent('brands', './components/brands.html');
    await loadComponent('footer', './components/footer.html');
    
    // After all components are loaded, initialize any scripts
    // that depend on these components being in the DOM
    if (typeof initializeScripts === 'function') {
        initializeScripts();
    }
});