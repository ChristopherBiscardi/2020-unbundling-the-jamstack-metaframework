import React from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Link,
  UnorderedList,
  ListItem,
  Notes,
  Quote,
  CodePane,
} from "spectacle";
import codeTheme from "prism-react-renderer/themes/nightOwl";

const theme = {
  colors: {
    primary: "#eef1f7",
    secondary: "#70e46f",
    tertiary: "#fb584a",
    quaternary: "#34b7ff",
    backgroundColor: "#19202c",
  },
  size: {
    maxCodePaneHeight: 500,
  },
  fonts: {
    header: "Inter",
  },
};

function App() {
  return (
    <Deck
      theme={theme}
      template={({ slideNumber, numberOfSlides }) => (
        <FlexBox
          justifyContent="space-between"
          position="absolute"
          bottom={-10}
          width={1}
        >
          <FlexBox padding="0 1em">
            <FullScreen />
            <Link
              fontSize="1.5rem"
              style={{ paddingBottom: "19px", textDecoration: "none" }}
              href="https://twitter.com/chrisbiscardi"
            >
              @chrisbiscardi
            </Link>
          </FlexBox>
          <Box padding="1em"></Box>
          <Box
            style={{
              position: "absolute",
              bottom: 10,
              height: "3px",
              width: "100%",
              marginTop: "2rem",
              border: "none",
              opacity: 0.5,
              background:
                "linear-gradient(90deg,rgba(251,89,74,1) 0%, rgba(251,89,74,1) 25%,rgba(251,222,75,1) 25%, rgba(251,222,75,1) 50%,rgba(112,228,112,1) 50%, rgba(112,228,112,1) 75%,rgba(51,183,255,1) 75%)",
            }}
          />
        </FlexBox>
      )}
    >
      <Slide backgroundColor="backgroundColor">
        <Heading>Unbundling the Jamstack Metaframework</Heading>
        <Heading as="h2" color="primary">
          Chris Biscardi
        </Heading>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">Setting Context</Heading>
        <UnorderedList>
          <ListItem>Independent</ListItem>
          <ListItem>GraphQL+Jamstack (LEO)</ListItem>
          <ListItem>Built gatsby-mdx, gatsby themes, etc</ListItem>
          <ListItem>Toast, Sector, etc</ListItem>
        </UnorderedList>
        <Notes>
          So you know where this talk is coming from.
          <br />
          <br />
          I'm independent. Work with OSS startups like Gatsby
          <br />
          <br />
          Built a GraphQL-based SSG before Gatsby had it.
          <br />
          <br />
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">TOC</Heading>
        <UnorderedList>
          {[
            "State of the Jamstack Ecosystem",
            "Why Webpack?",
            "No More Webpack",
            "What's Next?",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>State of the Jamstack Ecosystem</Heading>
        <UnorderedList>
          {["Frameworks", "Tooling", "Features", "Problems"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">Currently Popular Frameworks</Heading>
        <UnorderedList>
          {["Gatsby", "Next", "Nuxt", "VuePress"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
          <ListItem>
            <Link
              style={{ margin: 0, padding: 0 }}
              href="https://twitter.com/chrisbiscardi/status/1280983714403504128?s=20"
            >
              etc
            </Link>
          </ListItem>
        </UnorderedList>
        <Notes>
          Gatsby + GraphQL
          <br />
          <br />
          Next+Serverless
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">Currently Popular Frameworks</Heading>
        <UnorderedList>
          {["Webpack", "Webpack", "Webpack", "Webpack"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
          <ListItem>
            <Link
              style={{ margin: 0, padding: 0 }}
              href="https://twitter.com/chrisbiscardi/status/1280983714403504128?s=20"
            >
              etc
            </Link>
          </ListItem>
        </UnorderedList>
        <Notes>Another way to view all of the current popular frameworks</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Why Webpack?</Heading>
        <UnorderedList>
          {["Past", "Features"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Because of our past on the web, and the features it provides
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Our Past</Heading>
        <UnorderedList>
          {[
            "Script Tags/CommonJS/AMD/ESModules/etc",
            "The Rise of NPM",
            "Sharing styles/assets/etc",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Past: CommonJS, AMD, etc. Really because everyone settled on NPM and
          we needed a system to integrate NPM based commonjs style dependencies
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Script Tags, CommonJS, AMD, and ESModules</Heading>
        <UnorderedList>
          {["CommonJS 'won'", "Babel/ES2015 transpilation"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Short version: CommonJS won, so when ES2015 modules came around we had
          to compile them back to CommonJS.
          <br />
          <br />
          Babel operates on single files and we're still minifying bundles.
          <br />
          <br />
          Webpack coordinated the processes necessary to compile ESModules to
          CommonJS and then bundle them together and minify, etc
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>The Rise of NPM</Heading>
        <UnorderedList>
          {[
            "node.js chose CommonJS",
            "NPM became dominant",
            "Share more than JS",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Node.js came on the scene, pushing CommonJS format. NPM became
          dominant and then backend and frontend JS starting moving into NPM.
          <br />
          <br />
          So now, frontend JS in NPM packages. We also need CSS, Sprites,
          Images, Fonts, etc.
          <br />
          <br />
          Webpack added support for importing non-JS files, which solidifed
          NPM+CommonJS as the standard distribution method for libraries, etc.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Webpack Features</Heading>
        <UnorderedList>
          {[
            "Filetype based processing",
            "Hot Module Reloading",
            "Bundling",
            "Image imports/bare imports",
            "Higher level functionality (themes)",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>What do we get out of webpack?</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Filetype based processing</Heading>
        <UnorderedList>
          {[
            "*.js -> babel with X plugins",
            "*.ts -> typescript",
            "*.css -> CSS Modules",
            "*.png -> url-loader/file-loader",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Filetype based procesing opens up a whole suite of processing
          pipelines via loaders. Separates "When we import x.ext, what happens?"
          from the actual file itself.
          <br />
          <br />
          Can chain loaders for complex use cases
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Hot Module Reloading</Heading>
        <Quote>
          Hot Module Replacement (HMR) exchanges, adds, or removes modules while
          an application is running, without a full reload.
        </Quote>
        <UnorderedList>
          {["Make change -> see change", "vs older livereload, etc"].map(
            (v) => (
              <ListItem>{v}</ListItem>
            )
          )}
        </UnorderedList>
        <Notes>
          Significant quality of life improvement
          <br />
          <br />
          Downside: tends to be tricky to get full support for stateful
          components, etc
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Higher Level Functionality</Heading>
        <Quote>
          Using a Gatsby theme, all of your default configuration (shared
          functionality, data sourcing, design) is abstracted out of your site,
          and into an installable package.
        </Quote>
        <Notes>
          Webpack enables higher level tooling like CreateReactApp and Gatsby
          itself as well as even higher level tooling like Gatsby Themes, which
          relies heavily on how Webpack infers a dependency graph.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Problems</Heading>
        <UnorderedList>
          {["Build Performance", "Complexity", "Bundles and Modules"].map(
            (v) => (
              <ListItem>{v}</ListItem>
            )
          )}
        </UnorderedList>
        <Notes>
          Builds can get slow, especially if you tack on additional processing
          like images. This has given Webpack a reputation for not only being
          complex to debug but also slow to start and run.
          <br />
          <br />
          Webpack internals and configuration errors are hard to decipher
          because of the powerful tapable plugin system. It's not clear what
          goes where and why.
          <br />
          <br />
          Bundling compiled modules leads to difficulty deciphering large blobs
          of compiled code, even with source maps.
        </Notes>
      </Slide>
      {/** Mark: Next Gen */}
      <Slide backgroundColor="backgroundColor">
        <Heading>Next Gen Frameworks</Heading>
        <UnorderedList>
          {["Sapper", "VitePress", "Toast"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>Non-Webpack, ESModules first</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Rollup</Heading>
        <UnorderedList>
          {["Rollup", "Rollup", "Rollup"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Non-Webpack, ESModules first... converging on Rollup as the base
          library
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Sapper</Heading>
        <UnorderedList>
          {[
            "Svelte",
            "Rollup (or Webpack) for bundling",
            "rollup-plugin-svelte",
            "Closer to metal",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>Closer to Metal (anchor tags instead of Link components)</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>VitePress</Heading>
        <Quote>
          Now, with vite and Vue 3, it is time to rethink what a "Vue-powered
          static site generator" can really be.
        </Quote>
        <UnorderedList>
          {["Vue", "ESM and CSS Variables", "Vite under the hood > Rollup"].map(
            (v) => (
              <ListItem>{v}</ListItem>
            )
          )}
        </UnorderedList>
        <Notes>
          VitePress only targets browsers that support native ES module imports.
          It encourages the use of native JavaScript without transpilation, and
          CSS variables for theming.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Toast</Heading>
        <UnorderedList>
          {["Preact", "Rollup (npm)"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>Rollup</Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Tooling</Heading>
        <FlexBox>
          <UnorderedList>
            {[
              "Bundlers",
              "Babel",
              "NPM",
              "Sass/PostCSS/CSSModules",
              "sharp",
              "GraphQL",
            ].map((v) => (
              <ListItem>{v}</ListItem>
            ))}
          </UnorderedList>
          <UnorderedList>
            {[
              "rehype/remark/etc",
              "CMSs",
              "Serverless Functions",
              "TypeScript",
              "offline manifest",
            ].map((v) => (
              <ListItem>{v}</ListItem>
            ))}
          </UnorderedList>
        </FlexBox>
        <Notes>What do we expect from a Jamstack metaframework?</Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Jamstack Features</Heading>
        <UnorderedList>
          {["Data Fetching", "Prerendering"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Fundamentally JAMStack metaframeworks fetch data and render it into
          HTML.
          <br />
          <br />
          That HTML then gets sent to a CDN.
          <br />
          <br />
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">No More Webpack</Heading>
        <UnorderedList>
          {["Start from Scratch"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          So when getting rid of Webpack, we have to look at what the browser
          currently supports and lean more heavily on it.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading color="quaternary">No More Webpack</Heading>
        <UnorderedList>
          {["ESModules first", "Ecosystem Compat", "CSS", "Images"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes></Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>ESModules First</Heading>
        <FlexBox>
          <UnorderedList>
            {["import", "import()"].map((v) => (
              <ListItem>{v}</ListItem>
            ))}
          </UnorderedList>

          <CodePane
            minWidth={640}
            fontSize={30}
            language="javascript"
            theme={codeTheme}
          >
            {`import Preact from 'preact';

import()
  .then(module => {})
  .catch(e => {})`}
          </CodePane>
        </FlexBox>
        <Notes>
          import is supported by the browser directly.
          <br />
          <br />
          dynamic import() is too
          <br />
          <br />
          No bundling
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Import Problems</Heading>
        <UnorderedList>
          {[
            "bare imports",
            "react vs /web_modules/react.js",
            "NPM package imports",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Bare imports don't work in the browser today (import maps for future),
          so we have to compile them to URL paths (or write raw URL paths)
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Ecosystem Compat</Heading>
        <UnorderedList>
          {["NPM Packages", "Snowpack/Rollup"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          NPM packages don't usually have great ESM support, so Snowpack takes
          the part of turning commonjs based libraries into ESM compatible files
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>CSS</Heading>
        <UnorderedList>
          {["No module graph", "No importing CSS files?"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          We don't have a module graph like webpack has, so importing CSS files
          is gone.
          <br />
          <br />
          We *can* get this functionality back through clever use of babel
          plugins... or we can use the typical SASS/PostCSS/etc APIs.
          <br />
          <br />
          For advanced cases like hashing CSS file output we can postprocess
          html files, etc
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Images</Heading>
        <UnorderedList>
          {[
            "Greatest source of slowdown in Gatsby sites",
            "Use Cloudinary/etc",
          ].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          After seeing so many Gatsby sites, I've come to the conclusion that
          the build process that operates on your code is :100%: *not* the right
          place to deal with images.
          <br />
          <br />
          Toast users have built plugins that upload to Cloudinary and check the
          cache so uploads only happen once, producing faster builds.
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Toast</Heading>
        <UnorderedList>
          {["Ecosystem", "Data Fetching", "Prerendering", "Rehydration"].map(
            (v) => (
              <ListItem>{v}</ListItem>
            )
          )}
        </UnorderedList>
        <Notes>
          So it starts to become apparent that to support some of the stuff
          we're used to, we still need a separate process.
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Toast: Ecosystem</Heading>
        <UnorderedList>
          {["Snowpack", "import map", "babel plugin"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          Toast relies on Snowpack's v1 implementation to bundle third-party NPM
          dependencies into ESM-usable files.
          <br />
          <br />
          This output can be checked in or cached in CI.
          <br />
          <br />
          Toast also takes advantage of an import_map file produced at this time
          later to rewrite imports from bare to urls.
        </Notes>
      </Slide>

      <Slide backgroundColor="backgroundColor">
        <Heading>Toast: Data Fetching</Heading>
        <UnorderedList>
          {["Defer to user"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <Notes>
          After third-party bundling comes data fetching.
          <br />
          <br />
          Toast's opinion on data fetching is to let the user use regular client
          SDKs and APIs. This lack of extra abstraction means you get to use
          anything you're comfortable with and also re-use the docs written for
          your source of choice: from CMS' to the filesystem.
          <br />
          <br />
          Toast speaks JSON
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Toast: Prerendering</Heading>
        <UnorderedList>
          {["Snowpack is client-side"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>

        <Notes>
          Snowpack works on client-side code, so we need to adjust our imports
          to work in node.js land.
          <br />
          <br />
          This gives way to a major architectural decision: Pages can be
          considered self-contained "apps" (aka: regular HTML pages).
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Toast: Prerendering</Heading>
        <UnorderedList>
          {["User calls createPage with a code string"].map((v) => (
            <ListItem>{v}</ListItem>
          ))}
        </UnorderedList>
        <CodePane
          minWidth={640}
          fontSize={30}
          language="javascript"
          theme={codeTheme}
        >{`await createPage({
  module: \`/** @jsx mdx */
import {mdx} from '@mdx-js/preact';
\${compiledMDX}\`,
  slug: meta.slug,
  data: { ...meta }
});`}</CodePane>
        <Notes>
          This approach means there's no dissonance between a "template" file
          and a page.
          <br />
          <br />
          Rather than bootstrapping an entire React app on the client-side,
          Toast only ships the required JS necessary for a single page (or none
          if asked)
          <br />
          <br />
          This results in truly incremental compilation being possible as well
          as first-class MDX support.
        </Notes>
      </Slide>
      <Slide backgroundColor="backgroundColor">
        <Heading>Fin</Heading>
        <UnorderedList>
          <ListItem>
            <Link href="https://christopherbiscardi.com">
              christopherbiscardi.com
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/christopherBiscardi/toast">
              github.com/christopherBiscardi/toast
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/christopherBiscardi/christopherbiscardi.com">
              github.com/christopherBiscardi/christopherbiscardi.com
            </Link>
          </ListItem>
        </UnorderedList>

        <Notes>Fin</Notes>
      </Slide>
    </Deck>
  );
}
export default App;
