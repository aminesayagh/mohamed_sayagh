const publications = {
      state: {
            publications: {
                  titre: "Publications",
                  type: "list-paragraphe",
                  content: [
                        [
                              {
                                    text: "Sayagh, M., Kerazi, N., Adams, B. And Petrillo, F.(2018)."
                              },
                              {
                                    text: "software configuration engineering in practice -interviews, survey, and systematic literature review",
                                    link: "#",
                              },
                              {
                                    text: "transactions on software engineering(tse)."
                              },
                              {
                                    text: "bibtex",
                                    link: "#",
                              }
                        ],
                        [
                              {
                                    text: "Sayagh, M., Dong, Z., Andrzejak, A., And Adams, B.(2017)."
                              },
                              {
                                    text: "does the choice of configuration framework matter for developers?",
                                    link: "#",
                              },
                              {
                                    text: ", in proceedings of the 17th ieee international working conference on source code analysis and manipulation, scam (shanghai, china). (acceptance ratio: 14/31=45%) "
                              },
                              {
                                    text: "bibtex",
                                    link: "#",
                              }
                        ],
                        [
                              {
                                    text: "Sayagh, M., Kerzaki, N., Adams, B.(2017)."
                              },
                              {
                                    text: "on cross-stack configuration errors",
                                    link: "#",

                              },
                              {
                                    text: ", in proceedings of the 39th international conference on software engineering, icse (buenos aires, argentina). (acceptance ratio: 68/398=17%)"
                              },
                              {
                                    text: "bibtex",
                                    link: "#",

                              }
                        ],
                        [
                              {
                                    text: "Hassan, S., King, Z., Hafiz, M.,Sayagh, M., Adams, B. And Hindle, A. (2016). "
                              },
                              {
                                    text: "energy profiles of java collections classes, ",
                                    link: "#",

                              },
                              {
                                    text: "in proceedings of the 38th international conference on software engineering, icse (austin, tx, us). (acceptance ratio: 101/530=19%)"
                              },
                              {
                                    text: "bibtex",
                                    link: "#",

                              },
                              {
                                    text: "(acm sigsoft distinguished paper award)"
                              }
                        ],
                        [
                              {
                                    text: "Sayagh, M. 'tracking misconfiguration errors in multi - layered architecture systems'. doctoral symposium track of the 23rd ieee international conference on software analysis, evolution, and reengineering (saner 2016)."
                              }
                        ],
                        [
                              {
                                    text: "Sayagh, M. And Adams, B. (2015)."
                              },
                              {
                                    text: "multi-layer software configuration - empirical study on wordpress",
                                    link: "#",

                              },
                              {
                                    text: ", in proceedings of the 15th ieee international working conference on source code analysis and manipulation, scam (bremen, germany). (acceptance ratio: 24/68=35%) "
                              },
                              {
                                    text: "bibtex",
                                    link: "#",

                              },
                              { text: "[" },
                              {
                                    text: "aditionnal figures",
                                    link: "#",

                              },
                              {
                                    text: "]"
                              }
                        ],
                  ],
            },
      },
      getters: {
            GET_PUBLICATIONS: (state, payload) => state.publications,
      }
}

export default publications;