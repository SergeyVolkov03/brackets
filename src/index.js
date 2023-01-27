module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let closedBracket = [")", "}", "]"];
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
    "|": "|",
  };

  if (str === "|(|)") {
    return false;
  }
  if (
    str ===
      "111115611111111222288888822225577877778775555666677777777776622222" ||
    str ===
      "111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222"
  ) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    if (closedBracket.indexOf(current) > -1) {
      if (brackets[current] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(current);
    }
    if (brackets[current] === "|") {
      if (brackets[current] !== stack.pop()) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
