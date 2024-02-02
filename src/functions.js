import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// show_alert funcion exportable para mostrar alertas de sweet alert
export function show_alert(message, icon, focus){
    onFocus(focus);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:message, 
        icon:icon
    });
}

function onFocus(focus){
    if(focus !== ''){
        document.getElementById(focus).focus();
    }

}