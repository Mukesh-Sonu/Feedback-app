import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

import FeedbackItem from "./FeedbackItem";
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet !!</p>;
  }

  //with Animation
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* return (
    <div>
    {feedback.map((item)=>(
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))}
    </div>
  )
} */

export default FeedbackList;
