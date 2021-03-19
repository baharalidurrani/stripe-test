import morgan = require("morgan");

const morganOptions = {
  stream: {
    write: (str: string) => {
      // BgBlue console color
      console.log("\x1b[44m%s\x1b[0m", str.trim());
    },
  },
};

export const httpLogger = morgan("tiny", morganOptions);
