const teaching = {
      state: {
            teaching: {
                  titre: "Teaching",
                  paragraphe: [
                        [
                              {
                                    titre: "Winter 2021:"
                              },
                              [
                                    [
                                          {
                                                text: "Lecturer of the course:"
                                          },
                                          {
                                                text: "LOG680: Intorduction to the DevOps approach",
                                                link: "https://www.etsmtl.ca/etudes/cours/log680/",
                                          },
                                    ]
                              ]
                        ],
                        [
                              {
                                    titre: "Fall 2019:"
                              },
                              [
                                    [
                                          {
                                                text: "Lecturer of the course:"
                                          },
                                          {
                                                text: "CISC 850: Engineering of Ultra-large-scale systems",
                                                link: "https://sailhome.cs.queensu.ca/~msayagh/CISC_850_Engineering_ULSS_Fall_2019.html",
                                          },
                                    ]
                              ]
                        ],
                        [
                              {
                                    titre: "winter 2018:"
                              },
                              [
                                    [
                                          {
                                                text: "Lecturer of the courses:"
                                          },
                                          {
                                                text: "LOG1000: Introduction to Software Engineering",
                                                link: "http://www.polymtl.ca/etudes/cours/details.php?sigle=log1000",

                                          },
                                          {
                                                text: "INF3710: Databases",
                                                link: "http://www.polymtl.ca/etudes/cours/details.php?sigle=inf3710",

                                          },
                                    ]
                              ]
                        ],
                        [
                              {
                                    titre: "automn 2017:"
                              },
                              [
                                    [
                                          {
                                                text: "Teacher of the course:"
                                          },
                                          {
                                                text: "LOG1000",
                                                link: "#"
                                          }
                                    ],
                                    [
                                          {
                                                text: "Teacher assistant:"
                                          },
                                          {
                                                text: "INF2010",
                                                link: "#"
                                          }
                                    ],
                              ]
                        ],
                        [
                              {
                                    titre: "winter 2016, automn 2016, and winter 2017:"
                              },
                              [
                                    [
                                          {
                                                text: "Teacher assistant: "
                                          },
                                          {
                                                text: "LOG1000",
                                                link: "#"
                                          }
                                    ],
                                    [
                                          {
                                                text: "Teacher assistant: "
                                          },
                                          {
                                                text: "INF2010",
                                                link: "#"
                                          }
                                    ]
                              ]
                        ],
                        [
                              {
                                    titre: "automn 2015:"
                              },
                              [,
                                    [
                                          {
                                                text: "Teacher assistant: "
                                          },
                                          {
                                                text: " LOG8430",
                                                link: "#"
                                          }
                                    ],
                                    [
                                          {
                                                text: "Teacher assistant: "
                                          },
                                          {
                                                text: "INF2010",
                                                link: "#"
                                          }
                                    ]
                              ]
                        ]
                  ]
            },
      },
      getters: {
            GET_TEACHING: (state, payload) => state.teaching,
      }
}

export default teaching;