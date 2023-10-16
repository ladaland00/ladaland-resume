import { motion } from "framer-motion";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleButton = ({ setOpen }: Props) => {
  return (
    <button onClick={() => setOpen((prev: boolean) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: {
              d: "M 2 2.5 L 20 2.5",
            },
            open: {
              d: "M 3 16.5 L 17 2.5",
            },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: {
              opacity: 1,
              d: "M 2 10.5 L 20 10.5",
            },
            open: {
              opacity: 0,
            },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: {
              d: "M 2 18.346 L 20 18.346",
            },
            open: {
              d: "M 3 2.5 L 17 16.346",
            },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
