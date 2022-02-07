import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import "./Queue.css";
import { connect } from "react-redux";
import { lift } from "../../actions/";

const Queue = forwardRef((props, ref) => {
    const [queue, setQueue] = useState([]);

    useImperativeHandle(ref, () => ({
        addToQueue(e, floor) {
            setQueue((prevQueue) => {
                return [...prevQueue, { floor: floor, e: e }];
            });
        },
        getFirstInLine() {
            return queue[0];
        },
        getQueue() {
            return queue;
        },
    }));
    console.log(queue);
    useEffect(() => {
        const interval = setInterval(() => {
            const arr = queue;
            if (queue[0]) {
                arr.splice(0, 1);
                console.log(queue[0]);
                lift(queue[0].e);
                setQueue(arr);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [queue]);
    return (
        <div className='queue'>
            Going to: {queue[0]?.floor}
            <br />
            In line: {queue.map((item) => item.floor).join(" => ")}
        </div>
    );
});

// export default Queue;
export default connect(null, { lift }, null, { forwardRef: true })(Queue);
