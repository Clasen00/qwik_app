import { component$, useStyles$, PropFunction } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export type ViewerProps = {
  isShowed?: boolean;
  photo?: string;
  onClose$: PropFunction<() => void>;
};

export const Viewer = component$(
  ({ isShowed, photo, onClose$ }: ViewerProps) => {
    useStyles$(styles);

    return isShowed ? (
      <div
        class="root"
        onClick$={(e) => {
          e.stopPropagation;
          onClose$();
        }}
      >
        <button tabIndex={1} onClick$={() => onClose$()} class="close">
          ❌
        </button>
        <img class="image" src={photo} alt="" />
      </div>
    ) : (
      <></>
    );
  }
);
