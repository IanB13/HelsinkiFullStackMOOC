import React from 'react';

import {Entry as EntryProps} from "../types";

const Entry: React.FC<EntryProps> = (props) => {


return(
    <div>
       {props.id}
    </div>
);
};

export default Entry;