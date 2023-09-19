import WidgetBarchart from "@/app_modules/bar_chart_widget/view/bar_chart_widget";
import dataTop5 from './top5.json'

export default function Page() {
    return <>
        <WidgetBarchart data={dataTop5} test={true} />
    </>
}