'use client'

import { useState, useEffect } from "react";
import { useNavigation } from 'next/navigation';
import LoadingSpinner from "./LoadingSpinner";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();



   useEffect(() => {
    if (navigation.state === 'loading' && !global.deepLinkArray?.at(-1)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

 

  return loading ? <LoadingSpinner /> : null;
}

