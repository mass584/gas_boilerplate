declare namespace globalFunctions {
  interface global {
    main(): void;
  }
}

declare var global: globalFunctions.global;
