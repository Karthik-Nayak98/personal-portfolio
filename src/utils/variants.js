const staggerVariant = {
  hidden: { opacity: 0, x: -10, y: -10 },
  visible: { opacity: 1, x: 0, y: 0 },
}

const navVariants = {
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.075,
    },
  },
  close: {
    opacity: 0,
  },
}

const hamburgerVariant = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
  close: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.2 },
  },
}

const linkVariant = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    y: -10,
    opacity: 0,
  },
}

const skillVariant = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.075 } },
}

export { skillVariant, linkVariant, hamburgerVariant, navVariants, staggerVariant }
