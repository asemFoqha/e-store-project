import React, {useState} from "react";
import Loader from "../components/ui/Loader";

export default function withLoader(Component: typeof React.Component | React.FC) {
    return (props: React.ComponentProps<any>) => {
        const [loader, setLoader] = useState<boolean>(false);

        const handelEndLoader = () => {
            setLoader(false)
        };

        const handelStartLoader = () => {
            setLoader(true)
        };

        return (
            <div style={{height:'100%'}}>
                <Component
                    {...props}
                    onLoaderStart={handelStartLoader}
                    onLoaderEnd={handelEndLoader}
                />
                {loader && <Loader/>}
            </div>
        );
    };
}
