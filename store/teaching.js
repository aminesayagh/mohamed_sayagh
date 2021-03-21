const teaching = {
      state: {
            teaching: {
                  titre: "Teaching",
                  paragraphe: [
                        [
                              {
                                    titre: "winter 2018:"
                              },
                              [
                                    [
                                          {
                                                text: "Teacher of the courses:"
                                          },
                                          {
                                                text: "LOG1000",
                                                link: "#",

                                          },
                                          {
                                                text: "and "
                                          },
                                          {
                                                text: "INF3710",
                                                link: "#",

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