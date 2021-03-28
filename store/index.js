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
                        head: {
                              title: 'DR.Mohamed SAYAGH',
                              meta: [{
                                    hid: 'site for DR.Mohamed SAYAGH',
                                    name: 'description',
                                    content: 'My custom description'
                              }]
                        },
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
                        sousTitre: "ASSISTANT PROFESSOR AT ETS (QUÉBEC UNIVERSITY).",
                        titre: "mohammed sayagh",
                        image: {
                              link: "",
                              src: "~/assets/image_mohammed.png",
                              alt: ""
                        },
                        email: "sayaghmohammed@gmail.com",
                        paragraphe: [
                              {
                                    text: "I'm an assistant professor at Ecole Technologie Supérieur - Québec University. Before that, I was working as a PostDoc fellow in"
                              },
                              {
                                    text: "the Software Analysis and Intelligence Lab (SAIL)",
                                    link: "https://sail.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Queen's University (Kingston, ON)",
                                    link: "http://queensu.ca/"
                              },
                              {
                                    text: "under the suppervision of"
                              },
                              {
                                    text: "Prof. Ahmed E. Hassan",
                                    link: "http://research.cs.queensu.ca/home/ahmed/home/"
                              },
                              {
                                    text: "I obtained my Ph.D. from"
                              },
                              {
                                    text: "the Maintenance, Construction, and Intellligence of Software lab (MCIS) ",
                                    link: "http://mcis.cs.queensu.ca/"
                              },
                              {
                                    text: "at"
                              },
                              {
                                    text: "Ecole Polytechnique (Montréal, QC)",
                                    link: "http://polymtl.ca/"
                              },
                              {
                                    text: "under the supervision of"
                              },
                              {
                                    text: "Prof. Bram Adams.",
                                    link: "http://mcis.cs.queensu.ca/bram.html"
                              },
                              {
                                    text: "I have a wide range of research interests that are related to software empirical studies. My main focus is related to software variability in multi-component softawre systems. I have applied different qualitative and quantitative empricial studies techniques to my research, such as mining software repositories (e.g., source code repositories, online forums, and DockerHub), source code analysis (e.g., Slicing), and machine learning."
                              },
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