import Spinner from "@/components/spinner";
import "./loading.css"

export default function Loading() {
    return (
      <div className="pos-center">
        <Spinner />
      </div>
    );
  }