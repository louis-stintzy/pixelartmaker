import useStore from '../../../store/store';
import ClearCanvasToast from '../../Toasts/ClearCanvasToast';
import ColorReplacementToast from '../../Toasts/ColorReplacementToast';
import ContactToast from '../../Toasts/ContactToast';
import SavingToast from '../../Toasts/SavingToast';
import {
  useIsSavingToastVisible,
  useIsContactToastVisible,
} from '../../../store/selector';

function ToastsContainer() {
  const { toastVisible: colorReplacementToastVisible } = useStore(
    (state) => state.colorReplacement
  );
  const isSavingToastVisible = useIsSavingToastVisible();
  const isContactToastVisible = useIsContactToastVisible();

  const { clearCanvasToastVisible } = useStore((state) => state);
  return (
    <>
      {colorReplacementToastVisible && <ColorReplacementToast />}
      {clearCanvasToastVisible && <ClearCanvasToast />}
      {isSavingToastVisible && <SavingToast />}
      {isContactToastVisible && <ContactToast />}
    </>
  );
}

export default ToastsContainer;
