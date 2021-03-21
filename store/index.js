import Vuex from "vuex";

import publications from './publication';
import technical_reports from './technical-reports';
import workshops from './workshops';
import other_publications from './other-publication';
import reviewer_for from './reviewer-for';
import pc_member from './pc-member';
import teaching from './teaching';
import other_activities from './other-activities';

const database = () => {
      return new Vuex.Store({
            state: {
                  maintenance: {
                        // genti de ne pas touchi (non ne le pense meme pas je te voie faire) (tu pense toujour c'est normal t'est men frere aller fait le et pleurent apres )
                        state: true,
                        menuMobileState: false,
                        pagePrincipal: {
                              title: 'main page',
                        },
                        menu: [
                              {
                                    titre: "Publications",
                                    state: true,
                              },
                              {
                                    titre: "Technical Reports",
                                    state: false,
                              },
                              {
                                    titre: "Workshops",
                                    state: false,
                              },
                              {
                                    titre: "Other Publications",
                                    state: false,
                              },
                              {
                                    titre: "Reviewer for",
                                    state: false,
                              },
                              {
                                    titre: "PC Member",
                                    state: false,
                              },
                              {
                                    titre: "Teaching",
                                    state: false,
                              },
                        ],
                  },
                  main: {
                        sousTitre: "postdoc in queen's university.",
                        titre: "mohammed sayagh",
                        image: {
                              link: "",
                              src: "~/assets/image_mohammed.png",
                              alt: ""
                        },
                        email: "sayaghmohammed@gmail.com",
                        paragraphe: [
                              {
                                    text: "I'm working as a PostDoc fellow in"
                              },
                              {
                                    text: "the Software Analysis and Intelligence Lab (SAIL)",
                                    link: "#"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Queen's University (Kingston, ON)",
                                    link: "#"
                              },
                              {
                                    text: "under the suppervision of "
                              },
                              {
                                    text: "Prof. Ahmed E. Hassan.",
                                    link: "#",
                                    alt: ""
                              },
                              {
                                    text: "I obtained my Ph.D. from"
                              },
                              {
                                    text: "the Maintenance, Construction, and Intellligence of Software lab (MCIS) Ecole Polytechnique (Montréal, QC).",
                                    link: "#",
                                    alt: ""
                              },
                              {
                                    text: "at , in which I was supervised by"
                              },
                              {
                                    text: "Prof. Bram Adams.",
                                    link: "#",
                              },
                              {
                                    text: "I have a wide range of research interests but my focus is related to software variability and the engineering of large scale software systems. I have applied different empricial studies techniques to my research including qualitative and quantitative analysis, data mining, source code analysis. During my research, I mined different software repositories such as source code repositories, online forums (e.g., StackOverflow), and DockerHub."
                              }
                        ]
                  },
            },
            modules: {
                  publications,
                  technical_reports,
                  workshops,
                  other_publications,
                  reviewer_for,
                  pc_member,
                  teaching,
                  other_activities
            },
            getters: {
                  GET_MAINTENANCE: (state, payload) => state.maintenance,
                  GET_MAIN: (state, payload) => state.main,
            },
            mutations: {
                  GET_MAINTENANCE: (state, payload) => {
                        state.maintenance = payload;
                  },
            },
            actions: {
                  SET_MAINTENANCE: (context, payload) => {
                        context.commit("SET_MAINTENANCE", payload)
                  },
            }
      })
};

export default database;