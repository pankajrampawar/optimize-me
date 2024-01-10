
export default function DetailsCard() {
    return (
        <div className="flex flex-col gap-14 p-6 w-full rounded-2xl items-center bg-gradient-to-b from-TopColor to-BottomColor">
            <header className="text-white text-2xl font-thin tracking-wider">
                Overall
            </header>
            <div className="text-6xl text-white font-extralight bg-gradient-to-b from-CircleTop to-CircleBottom w-44 h-44 flex justify-center items-center rounded-full">
                75%
            </div>
            <article className="text-2xl text-white font-extralight text-center">
                Hmpph! for now you are in safe zone.
            </article>
        </div>
    )
}