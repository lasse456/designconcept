export default function DefaultHero(props:any) {
    return (
        <section className="py-[100px] pb-[30px]">
            <div>
                <div className="w-[94%] mx-auto text-main mb-[100px]">
                    <p className="text-[20px] font-[200] mb-[20px]">/{props.section}</p>
                    <h1 className="text-[84px] mb-[30px] w-[40%] leading-[85px] tracking-tighter">{props.heading}.</h1>
                </div>
            </div>
        </section>
    )
}