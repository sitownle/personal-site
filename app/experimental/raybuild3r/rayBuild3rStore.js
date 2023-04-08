import { create } from "zustand";

const useRayBuild3rStore = create(set => ({
  position: [0, 0, 0],
  setPos: newVal =>
    set(state => ({
      position: newVal
    }))
}));
export default useRayBuild3rStore;
