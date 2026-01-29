import Swal from 'sweetalert2';

export const showAlert = ({ title, text, icon = 'success' }) => {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor: '#BC8B22',
        confirmButtonText: 'OK',
        customClass: {
            container: 'luxury-swal-container',
            popup: 'luxury-swal-popup',
            title: 'luxury-swal-title',
            confirmButton: 'luxury-swal-confirm'
        }
    });
};

export const showSuccess = (title, text) => showAlert({ title, text, icon: 'success' });
export const showError = (title, text) => showAlert({ title, text, icon: 'error' });
