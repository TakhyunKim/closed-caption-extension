const Storage = {
  async getStorageValue<R>(key: string): Promise<{ [key: string]: R }> {
    const storageValue = await chrome.storage.sync.get(key);

    return storageValue;
  },

  async setStorageValue<T>(key: string, value: T) {
    await chrome.storage.sync.set({ [key]: value });
  },
};

export default Storage;
