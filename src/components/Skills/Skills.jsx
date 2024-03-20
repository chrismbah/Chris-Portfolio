import "./Skills.css";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import js from "../../assets/skills/js.svg";
import ts from "../../assets/skills/ts-icon.svg";
import react from "../../assets/skills/react.svg";
import tailwind from "../../assets/skills/tailwind.svg";
import git from "../../assets/skills/git.svg";
import github from "../../assets/skills/github.svg";
import vercel from "../../assets/skills/vercel.svg";
import vite from "../../assets/skills/vite.svg";
import python from "../../assets/skills/python.svg";
import vscode from "../../assets/skills/vscode.svg";
import pycharm from "../../assets/skills/pycharm.svg";
import { motion } from "framer-motion";
import { variants1, variants3 } from "../../animations/variants";
export default function Skills() {
  return (
    <main id="skills">
      <section className="skills-info" id="skills">
        <div className="header">
          <motion.h2
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
          >
            My Skills
          </motion.h2>
        </div>
        <div className="lang">
          <motion.h3
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={2}
          >
            <div className="bar"></div>Languages
          </motion.h3>
          <div className="icons">
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={3}
              className="icon html"
            >
              <img src={html} alt="html" />
              <p>HTML</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={4}
              className="icon css"
            >
              <img src={css} alt="css" />
              <p>CSS</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className="icon js"
            >
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </motion.div>

            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={6}
              className="icon ts"
            >
              <img src={ts} alt="ts" />
              <p>TypeScript</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={7}
              className="icon python"
            >
              <img src={python} alt="python" />
              <p>Python</p>
            </motion.div>
          </div>
        </div>
        <div className="frameworks">
          <motion.h3
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={2.5}
          >
            <div className="bar"></div>Frameworks
          </motion.h3>
          <div className="icons">
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={3}
              className="icon react"
            >
              <img src={react} alt="react" />
              <p>React</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={4}
              className="icon tailwind"
            >
              <img src={tailwind} alt="tailwind" />
              <p>Tailwind</p>
            </motion.div>
          </div>
        </div>
        <div className="tools">
          <motion.h3
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={3}
          >
            {" "}
            <div className="bar"></div>Tools
          </motion.h3>
          <div className="icons">
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={3}
              className="icon git"
            >
              <img src={git} alt="git" />
              <p>Git</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={4}
              className="icon github"
            >
              <img src={github} alt="github" />
              <p>Github</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className="icon vercel"
            >
              <img src={vercel} alt="vercel" />
              <p>Vercel</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={6}
              className="icon vite"
            >
              <img src={vite} alt="vite" />
              <p>Vite</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={7}
              className="icon vscode"
            >
              <img src={vscode} alt="vite" />
              <p>VS Code</p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={8}
              className="icon pycharm"
            >
              <img src={pycharm} alt="vite" />
              <p>PyCharm</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
