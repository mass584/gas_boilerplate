declare namespace globalFunctions {
  interface global {
    main(): void;
  }
}

// eslint-disable-next-line no-var
declare var global: globalFunctions.global;
