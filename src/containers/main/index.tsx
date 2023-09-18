import { PropsWithChildren } from "react"
import Form from "@/components/form";
import '../../models/sample';

interface IMainContainerProps extends PropsWithChildren {}

const MainContainer = ({ children }: IMainContainerProps) => {

  return (
    <div className="flex p-6">
      {children}
    </div>
  )
};

export default MainContainer;