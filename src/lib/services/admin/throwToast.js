import { toast } from '@zerodevx/svelte-toast';

export async function throwSuccessToast(message){
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(72,187,120,0.9)',
            '--toastBarBackground': '#2F855A'
        },
        duration: 1500,
      })
}

export async function throwErrorToast(message){
    toast.push(message, {
        theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(186, 73, 73, 0.9)',
            '--toastBarBackground': '#85302f'
          },
        duration: 4500,
      })
}