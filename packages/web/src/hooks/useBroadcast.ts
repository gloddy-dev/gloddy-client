'use client';
import { BroadcastChannel, BroadcastChannelOptions } from 'broadcast-channel';
import { useCallback, useEffect, useRef } from 'react';

import useDidUpdate from './common/useDidUpdate/useDidUpdate';

export interface UseBroadcastChannelOptions extends Omit<BroadcastChannelOptions, 'node'> {}

export function useBroadcastChannel<T>(
  channelName: string,
  onMessage?: (message: T) => void,
  options?: UseBroadcastChannelOptions
) {
  const broadcastChannelRef = useRef<BroadcastChannel<T> | null>(null);
  const onMessageRef = useRef<((message: T) => void) | null>(null);

  const handlePostMessage = useCallback((message: T) => {
    if (broadcastChannelRef.current) {
      broadcastChannelRef.current.postMessage(message);
    }
  }, []);

  useEffect(() => {
    if (onMessage) {
      onMessageRef.current = onMessage;
    }
  }, [onMessage]);

  useDidUpdate(() => {
    const channel = new BroadcastChannel<T>(channelName, options);

    channel.onmessage = (message: T) => {
      onMessageRef.current?.(message);
    };
    broadcastChannelRef.current = channel;

    return () => {
      broadcastChannelRef.current = null;
      channel.close();
    };
  }, [channelName, options]);

  return { postMessage: handlePostMessage };
}
