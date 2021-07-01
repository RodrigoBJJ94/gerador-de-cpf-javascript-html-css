import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const CpfGerado = document.querySelector('.cpf-gerado');
    CpfGerado.innerHTML = gera.geraNovoCPF();
})();