import useDidUpdate from './useDidUpdate';
import { cleanup, fireEvent, render, renderHook, screen } from '@testing-library/react';
import { cleanup as hookCleanup } from '@testing-library/react-hooks';
import { useState } from 'react';

const STATE_BUTTON = 'setState';

describe('hooks/common/useDidUpdate/useDidUpdate', () => {
  let App: () => JSX.Element;
  const mockCallback = jest.fn();

  beforeEach(() => {
    App = function () {
      const [state, setState] = useState(false);

      useDidUpdate(() => {
        mockCallback();
      }, [state]);

      return (
        <div>
          <button onClick={() => setState((prev) => !prev)}>{STATE_BUTTON}</button>
        </div>
      );
    };
  });

  afterAll(() => {
    cleanup();
    hookCleanup();
  });

  it('should defined', () => {
    expect(useDidUpdate).toBeDefined();
  });

  it('not called callback when mounted', () => {
    const mockCallback = jest.fn();
    renderHook(() => useDidUpdate(mockCallback, []));
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('called when dependency list update', () => {
    render(<App />);
    expect(mockCallback).not.toHaveBeenCalled();
    const setStateButton = screen.getByText(STATE_BUTTON);
    fireEvent.click(setStateButton);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
