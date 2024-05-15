import { toast } from '@zerodevx/svelte-toast';

export function throwSuccessToast(message){
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(72,187,120,0.9)',
            '--toastBarBackground': '#2F855A'
        },
        duration: 1500,
      })
}

export function throwErrorToast(message){
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(186, 73, 73, 0.9)',
            '--toastBarBackground': '#85302f'
          },
        duration: 4500,
      })
}

//todo make this yellow
export function throwWarningToast(message){
  toast.push(message, {
      theme: {
          '--toastColor': 'mintcream',
          '--toastBackground': 'rgba(180, 186, 73, 0.9)',
          '--toastBarBackground': '#85712f'
        },
      duration: 1500,
    })
}