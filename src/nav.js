function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function navigation(setHideHome, setHidePage, setChangePage){
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    let path;
    redirect ? path = redirect : path = window.location.pathname;
    switch (path){
        case '/':
            setHideHome(false)
            setHidePage(true);
            setChangePage({change: false, name: ''})
            return;

        case '/resume-fr':
            setChangePage({
              change: true,
              name: "/assets/mydoc/resume-fr.pdf"
            })
            setHideHome(true);
            setHidePage(false);
          return;

        case '/resume-en':
            setChangePage({
                    change: true,
                    name: "/assets/mydoc/resume-en.pdf"
            })
            setHideHome(true);
            setHidePage(false);
          return;

        case '/cover-fr':
            setChangePage({
                change: true,
                name: "/assets/mydoc/cover-fr.pdf"
            })
            setHideHome(true);
            setHidePage(false);
          return;

        case '/cover-en':
            setChangePage({
                change: true,
                name: "/assets/mydoc/cover-en.pdf"
            })
            setHideHome(true);
            setHidePage(false);
          return;

        case '/Solong':
            setChangePage({
                change: true,
                name: "So long"
            })
            setHidePage(false);
            setHideHome(true);
          return;

        case '/Minishell':
            setChangePage({
                change: true,
                name: "Minishell"
            })
            setHideHome(true);
          return;

        case '/Cub3D':
            setChangePage({
                change: true,
                name: "Cub3D"
            })
            setHideHome(true);
          return;

        case '/PiscineC++':
            setChangePage({
                change: true,
                name: "Piscine C++"
            })
            setHideHome(true);
          return;

        case '/IRC':
            setChangePage({
                change: true,
                name: "IRC"
            })
            setHideHome(true);
          return;

        case '/Transcendence':
            setChangePage({
                change: true,
                name: "Transcendence"
            })
            setHideHome(true);
          return;
        }
    return (404)
}

export function pushHistory(path){

    if (window.location.pathname === path)
        return
    else
        history.pushState(null, '', path);
}