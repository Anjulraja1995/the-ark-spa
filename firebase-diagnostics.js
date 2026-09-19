(function(){
  window.arkFirebaseDiagnostics=function(){
    return {firebaseLoaded:typeof firebase!=='undefined',authLoaded:typeof firebase!=='undefined'&&!!firebase.auth,databaseLoaded:typeof firebase!=='undefined'&&!!firebase.database,ready:!!window.firebaseReady,projectId:(window.firebaseConfig&&window.firebaseConfig.projectId)||'the-ark-spa-salon'};
  };
})();
