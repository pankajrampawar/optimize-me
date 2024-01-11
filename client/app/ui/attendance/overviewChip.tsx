
export default function OverviewChip() {
    return (
        <div className="p-3 flex justify-between w-[330px] bg-CardColor rounded-2xl text-white font-light">
            <span className="tracking-wide">
                Subject
            </span>

            <span>
                40%
            </span>

            <span className="flex gap-1">
                <button className="bg-TopColor">
                    <img src="/add.svg" alt="add" className="p-1"/>
                </button>
                
                <button className="bg-TopColor min-w-[20px]">
                    <img src="/delete.svg" alt="trash" className="p-1"/>
                </button>
            </span>
        </div>
    )
};