import type { showToast } from '@yy/xh-toast'
import type { Emitter } from 'mitt'

declare global {
  declare interface Window {
    $bus: Emitter;
    $toast: showToast;
    reportMonitor: (data: object) => void;
  }
}
