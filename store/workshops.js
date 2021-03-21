const workshops = {
      state: {
            workshops: {
                  titre: "Workshops",
                  type: "list-et-sous-list",
                  content: [
                        {
                              titre: "talks",
                              list: [
                                    "CSER 2017: An Exploratory Study On Software Configuration - State Of The Art And Practice",
                                    "CSER 2017: On Cross-stack Configuration Errors",
                                    "CSER 2015: Multi-layer configuration errors – Empirical study on Wordpress"
                              ]
                        },
                        {
                              titre: "posters",
                              list: [
                                    "MOSART 2017: On Cross-stack Configuration Errors",
                                    "CSER 2015: Tracking Misconfiguration Errors in Multi-layer Systems",
                                    "CSER 2014: Tracking cross-layer configuration bugs - Case study on Wordpress",
                                    "Plow Workshop 2014: Tracking cross-layer configuration bugs - Case study on Wordpress"
                              ]
                        }
                  ]
            },
      },
      getters: {
            GET_WORKSHOPS: (state, payload) => state.workshops,
      }
}

export default workshops;