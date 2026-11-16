import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = () => {
  const { toasts, removeToast } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'border-purple-500/50';
        let iconColor = 'text-purple-400';
        let bgGlow = 'rgba(147, 51, 234, 0.15)';

        if (toast.type === 'warning') {
          Icon = AlertCircle;
          borderColor = 'border-amber-500/50';
          iconColor = 'text-amber-400';
          bgGlow = 'rgba(245, 158, 11, 0.15)';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderColor = 'border-blue-500/50';
          iconColor = 'text-blue-400';
          bgGlow = 'rgba(59, 130, 246, 0.15)';
        }

        return (
          <div
            key={toast.id}
            role="alert"
            style={{
              backgroundColor: '#12131C',
              boxShadow: `0 10px 25px -5px ${bgGlow}, 0 8px 10px -6px rgba(0, 0, 0, 0.6)`,
            }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border ${borderColor} text-white transition-all transform animate-slide-in backdrop-blur-md`}
          >
            <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
            <div className="flex-1 text-sm font-medium leading-snug">
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-400 hover:text-white transition-colors p-0.5 rounded-lg hover:bg-white/5"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
