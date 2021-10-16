/**
 * Everything start from here!
 */




 

/**
 * Webpack HMR Activation
 */
 type ModuleId = string | number;

 interface WebpackHotModule {
   hot?: {
     data: any;
     accept(
       dependencies: string[],
       callback?: (updatedDependencies: ModuleId[]) => void,
     ): void;
     accept(dependency: string, callback?: () => void): void;
     accept(errHandler?: (err: Error) => void): void;
     dispose(callback: (data: any) => void): void;
   };
 }

 /*
 If you need to create such a micro server with express, remove this comment!

 declare const module: WebpackHotModule;
 if (module.hot) {
   module.hot.accept();
   module.hot.dispose(() => server.close());
 }
 */
 
/**
 * Error when press Ctr + C for stoping script from running, i do not know why! But sometime it happens
 * @McJamBi  from Jamviet.com
 * @DateTime 2021-07-23T16:40:58+0700
 */
process.on('SIGINT', function() {
  console.log( "\nShutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  process.exit(1);
});