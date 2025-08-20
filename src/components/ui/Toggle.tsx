'use client';

import { cn } from "@/lib/utils";

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Toggle = ({ checked = false, onChange, className }: ToggleProps) => {
  return (
    <>
      <style jsx>{`
        .toggle-container {
          --toggle-width: 100px;
          --toggle-height: 56px;
          --toggle-gutter: 6px;
          --toggle-handle-size: 24px;
          --toggle-handle-bar-height: 8px;
          position: relative;
          display: inline-block;
          width: var(--toggle-width);
          height: var(--toggle-height);
          font-family: sans-serif;
        }

        .toggle-container *,
        .toggle-container *:before,
        .toggle-container *:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .toggle-input {
          position: absolute;
          z-index: 2;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .toggle-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          background-color: #e8e8ea;
          box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.15),
            inset 0px 2px 2px 0px rgba(255, 255, 255, 0.3),
            inset 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
        }

        .toggle-base-inside {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: var(--toggle-gutter);
          left: var(--toggle-gutter);
          width: calc(100% - var(--toggle-gutter) * 2);
          height: calc(100% - var(--toggle-gutter) * 2);
          border-radius: calc((var(--toggle-height) - var(--toggle-gutter) * 2) / 2);
          background-color: #e8e8ea;
          background-image: linear-gradient(180deg, #e8e8ea 0%, #f3f3f3 100%);
          box-shadow: inset 0px -4px 5px 0px rgba(255, 255, 255, 0.2);
        }

        .toggle-handle-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .toggle-handle {
          position: absolute;
          top: 50%;
          left: 10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05),
            0px 10px 24px 0px rgba(0, 0, 0, 0.22),
            inset 0px -10px 24px 0px rgba(0, 0, 0, 0.12);
          -webkit-transition: left 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
          transition: left 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
          transform: translateY(-50%);
        }

        .toggle-input:checked ~ .toggle-base {
          background-color: #4bd865;
          box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.15),
            inset 0px 2px 2px 0px rgba(255, 255, 255, 0.3),
            inset 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
        }

        .toggle-input:checked ~ .toggle-base .toggle-base-inside {
          background-color: #4bd865;
          background-image: linear-gradient(180deg, #4bd865 0%, #36d753 100%);
        }

        .toggle-input:checked ~ .toggle-handle-wrapper .toggle-handle {
          left: calc(100% - 50px);
        }

        .toggle-handle-knob {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
        }

        .toggle-handle-bar-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc(100% - 16px);
          height: var(--toggle-handle-bar-height);
          transform: translate(-50%, -50%);
          overflow: hidden;
        }

        .toggle-handle-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #c4c4c6;
          border-radius: var(--toggle-handle-bar-height);
          box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
        }

        .toggle-input:checked ~ .toggle-handle-wrapper .toggle-handle-bar {
          background-color: transparent;
        }
      `}</style>
      <div className={cn("toggle-container", className)}>
        <input 
          className="toggle-input" 
          type="checkbox" 
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className="toggle-handle-wrapper">
          <div className="toggle-handle">
            <div className="toggle-handle-knob"></div>
            <div className="toggle-handle-bar-wrapper">
              <div className="toggle-handle-bar"></div>
            </div>
          </div>
        </div>
        <div className="toggle-base">
          <div className="toggle-base-inside"></div>
        </div>
      </div>
    </>
  );
};

export default Toggle;