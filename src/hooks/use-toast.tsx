import { toast as sonnerToast } from "sonner";

export type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
};

export type ToastActionElement = React.ReactNode;

type ToasterToast = ToastProps & {
  id: string | number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

let count = 0;
const genId = () => (++count).toString();

export function toast(props: Omit<ToasterToast, "id">) {
  const id = genId();

  // Sonner supports updates and dismiss using ID
  sonnerToast(props.title ?? "", {
    id,
    description: props.description,
    duration: props.duration ?? 4000,
    action: props.action
      ? {
          label: props.action,
          onClick: () => {},
        }
      : undefined,
  });

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (newProps: Partial<ToasterToast>) =>
      sonnerToast(newProps.title ?? props.title ?? "", {
        id,
        description: newProps.description ?? props.description,
        duration: newProps.duration ?? props.duration,
        action: newProps.action
          ? {
              label: newProps.action,
              onClick: () => {},
            }
          : undefined,
      }),
  };
}

// Kept for compatibility — Sonner does not need state, but your code might expect this hook
export function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) sonnerToast.dismiss(toastId);
      else sonnerToast.dismiss(); // dismiss all
    },
    toasts: [], // no internal state required
  };
}
