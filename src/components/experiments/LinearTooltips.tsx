import { useEffect, useState } from "react";

const DownArrowIcon = ({ open }: { open: boolean }) => {
  return (
    <svg
      className={open ? "rotate-90" : ""}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#949496"
      role="img"
      focusable="false"
      aria-hidden="true"
      //   style={{ "--icon-color": "#949496" }}
    >
      <path d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
    </svg>
  );
};

const ViewsIcon = ({ hovering }: { hovering: boolean }) => {
  return (
    <svg
      className={hovering ? "fill-white" : ""}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#949496"
      role="img"
      focusable="false"
      aria-hidden="true"
      //   style={{"--icon-color": "#949496"}}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.03531 2.4967C8.00782 2.49206 7.97974 2.49206 7.95225 2.4967C7.94834 2.49762 7.93369 2.50161 7.89987 2.51472C7.84539 2.53584 7.77481 2.56698 7.64896 2.62291L3.76649 4.34834C3.27153 4.56831 2.9481 4.71286 2.72417 4.8378C2.58219 4.91702 2.52809 4.96361 2.51321 4.9772C2.48794 5.03526 2.48565 5.10081 2.50683 5.16048C2.52072 5.17508 2.57145 5.22532 2.70758 5.31423C2.92227 5.45446 3.23486 5.62118 3.71331 5.87507L6.47204 7.33898C7.1979 7.72415 7.42758 7.83752 7.65481 7.88244C7.87863 7.92668 8.10893 7.92668 8.33274 7.88244C8.55998 7.83752 8.78966 7.72415 9.51552 7.33898L12.2742 5.87507C12.7527 5.62118 13.0653 5.45446 13.28 5.31423C13.4161 5.22532 13.4668 5.17508 13.4807 5.16049C13.5019 5.10081 13.4996 5.03527 13.4743 4.97721C13.4595 4.96361 13.4054 4.91703 13.2634 4.83781C13.0394 4.71287 12.716 4.56831 12.2211 4.34834L8.3386 2.62291C8.21275 2.56698 8.14217 2.53584 8.08768 2.51472M7.70273 1.01854C7.8954 0.986007 8.09216 0.986007 8.28483 1.01854C8.50567 1.05583 8.7095 1.14687 8.90002 1.23197C8.91581 1.23902 8.9315 1.24603 8.9471 1.25296L12.8619 2.99276C13.3156 3.19437 13.7026 3.36635 13.9934 3.52863C14.2797 3.68837 14.6072 3.90799 14.7946 4.26626C15.0403 4.73608 15.0597 5.29202 14.8472 5.7778C14.6853 6.14824 14.3738 6.39013 14.0994 6.56942C13.8205 6.75154 13.4464 6.95005 13.0078 7.18275L10.2179 8.66325C10.1873 8.67946 10.1572 8.69546 10.1275 8.71125C9.5304 9.02846 9.09485 9.25986 8.62329 9.35307C8.20763 9.43524 7.77993 9.43524 7.36427 9.35307C6.89271 9.25986 6.45717 9.02846 5.8601 8.71125C5.83038 8.69546 5.80025 8.67946 5.7697 8.66325L2.97973 7.18276C2.54116 6.95005 2.16704 6.75154 1.88819 6.56941C1.6137 6.39013 1.30229 6.14824 1.14031 5.7778C0.927888 5.29201 0.947252 4.73607 1.19296 4.26626C1.38032 3.90799 1.70781 3.68836 1.99411 3.52862C2.28494 3.36635 2.67197 3.19437 3.12565 2.99276L7.04046 1.25296C7.05607 1.24603 7.07176 1.23902 7.08754 1.23197C7.27806 1.14687 7.48189 1.05583 7.70273 1.01854ZM8.03531 2.4967C8.03458 2.49657 8.03421 2.49648 8.03419 2.49647ZM8.03531 2.4967C8.03458 2.49657 8.03421 2.49648 8.03419 2.49647Z"
      ></path>
      <path d="M2.11544 7.84129C1.75436 7.63903 1.29772 7.76786 1.09551 8.12904C0.893307 8.49022 1.0221 8.94699 1.38319 9.14925L4.22703 10.7422C5.39968 11.3994 6.13596 11.812 6.93014 11.9765C7.6318 12.1218 8.35579 12.1218 9.05744 11.9765C9.85162 11.812 10.5879 11.3994 11.7606 10.7422L14.6044 9.14925C14.9655 8.94699 15.0943 8.49022 14.8921 8.12904C14.6899 7.76786 14.2332 7.63903 13.8721 7.84129L11.1425 9.3703C9.81742 10.1126 9.29302 10.3968 8.75354 10.5086C8.25236 10.6124 7.73523 10.6124 7.23404 10.5086C6.69456 10.3968 6.17017 10.1125 4.84508 9.3703L2.11544 7.84129Z"></path>
      <path d="M2.12332 10.8439C1.76471 10.6373 1.30654 10.7606 1.09998 11.1193C0.893422 11.478 1.01668 11.9363 1.3753 12.1429L3.35378 13.2829C4.83534 14.1367 5.7312 14.653 6.69796 14.8582C7.55234 15.0395 8.43523 15.0395 9.28961 14.8582C10.2564 14.653 11.1522 14.1367 12.6338 13.2829L14.6123 12.1429C14.9709 11.9363 15.0941 11.478 14.8876 11.1193C14.681 10.7606 14.2229 10.6373 13.8642 10.8439L12.0082 11.9133C10.3656 12.8597 9.68496 13.2418 8.97861 13.3917C8.32928 13.5295 7.65828 13.5295 7.00896 13.3917C6.30261 13.2418 5.62199 12.8597 3.9794 11.9133L2.12332 10.8439Z"></path>
    </svg>
  );
};

const RoadmapsIcon = ({ hovering }: { hovering: boolean }) => {
  return (
    <svg
      className={hovering ? "fill-white" : ""}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#949496"
      role="img"
      focusable="false"
      aria-hidden="true"
      //   style={{"--icon-color": "#949496"}}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.097 1.16105C5.6592 0.830341 6.35867 0.839742 6.91178 1.18544L9.86812 3.03314C9.94911 3.08376 10.0519 3.08382 10.1329 3.03328L13.0886 1.1903C13.9212 0.671145 15 1.2698 15 2.251V12.1827C15 12.6669 14.7204 13.1075 14.2822 13.3137L10.8127 14.9464C10.2745 15.1997 9.64451 15.1623 9.14009 14.847L6.13188 12.9669C6.05089 12.9162 5.94814 12.9162 5.8671 12.9667L2.91138 14.8097C2.07877 15.3289 1 14.7302 1 13.749V4.28598C1 3.84302 1.23443 3.43314 1.61623 3.20856L5.097 1.16105ZM2.5 4.42896L5.25 2.81132V11.5974C5.1898 11.6259 5.13085 11.6581 5.07345 11.6939L2.5 13.2985V4.42896ZM6.92688 11.6949C6.86938 11.6589 6.81031 11.6266 6.75 11.598V2.85319L9.07313 4.30514C9.13062 4.34108 9.18969 4.37337 9.25 4.40203V13.1468L6.92688 11.6949ZM10.75 13.3182L13.5 12.024V2.7015L10.9266 4.30612C10.8692 4.34191 10.8102 4.37408 10.75 4.40262V13.3182Z"
      ></path>
    </svg>
  );
};

const TeamsIcon = ({ hovering }: { hovering: boolean }) => {
  return (
    <svg
      className={hovering ? "fill-white" : ""}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#949496"
      role="img"
      focusable="false"
      aria-hidden="true"
      //   style={{"--icon-color": "#949496"}}
    >
      <path d="M10.5 6.5C10.5 7.88071 9.38071 9 8 9C6.61929 9 5.5 7.88071 5.5 6.5C5.5 5.11929 6.61929 4 8 4C9.38071 4 10.5 5.11929 10.5 6.5Z"></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 4.75C1 2.67893 2.67893 1 4.75 1H11.25C13.3211 1 15 2.67893 15 4.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75ZM4.75 2.5C3.50736 2.5 2.5 3.50736 2.5 4.75V11.25C2.5 12.0759 2.945 12.7979 3.60832 13.1892C3.61068 13.1857 3.61307 13.1822 3.61549 13.1787C4.14802 12.4043 5.47629 11 8.00001 11C10.5237 11 11.852 12.4043 12.3845 13.1787C12.3869 13.1822 12.3893 13.1857 12.3917 13.1892C13.055 12.7979 13.5 12.0759 13.5 11.25V4.75C13.5 3.50736 12.4926 2.5 11.25 2.5H4.75Z"
      ></path>
    </svg>
  );
};

const LinearTooltips = () => {
  const [open, setOpen] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [hoveringId, setHoveringId] = useState<string>();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!hovering) {
      setShowTooltip(false);
    } else if (hovering) {
      setTimeout(() => {
        setShowTooltip(true);
      }, 800);
    }
  }, [hovering]);

  return (
    <aside className="flex flex-col gap-px bg-[#080808] rounded-md p-2 pl-5 max-w-48 font-medium w-full">
      <button
        className="text-xs text-[#949496] flex pb-1"
        onClick={() => setOpen(!open)}
      >
        Workspace <DownArrowIcon open={open} />
      </button>
      {open ? (
        <div className="flex flex-col -mx-2">
          <div
            className="flex gap-2 items-center [font-size:13px] hover:bg-[#121316] rounded-sm mr-2 px-2 py-1 cursor-pointer relative"
            onMouseEnter={() => {
              setHovering(true);
              setHoveringId("views");
            }}
            onMouseLeave={() => {
              setHovering(false);
              setHoveringId(undefined);
            }}
          >
            <ViewsIcon hovering={hovering && hoveringId === "views"} />
            Views
            {/* Tooltip */}
            {hovering && hoveringId === "views" && showTooltip ? (
              <div className="absolute flex bg-[#1b1c1f] left-[calc(100%+16px)] w-fit whitespace-nowrap border border-[#383b41] rounded-[4px] px-2 py-[5px] text-[11px] gap-2 z-20">
                Views{" "}
                <span>
                  <kbd className="bg-[#292c33] py-0.5 px-1 font-sans rounded-[4px] border border-[#383b41]">
                    G
                  </kbd>{" "}
                  <span className="[font-size:10px] text-[#9c9da0] px-[3px]">
                    then
                  </span>{" "}
                  <kbd className="bg-[#292c33] py-0.5 px-1 font-sans rounded-[4px] border border-[#383b41]">
                    U
                  </kbd>
                </span>
              </div>
            ) : null}
          </div>
          <div
            className="flex gap-2 items-center [font-size:13px] hover:bg-[#121316] rounded-sm mr-2 px-2 py-1 cursor-pointer relative"
            onMouseEnter={() => {
              setHovering(true);
              setHoveringId("roadmaps");
            }}
            onMouseLeave={() => {
              setHovering(false);
              setHoveringId(undefined);
            }}
          >
            <RoadmapsIcon hovering={hovering && hoveringId === "roadmaps"} />
            Roadmaps
            {/* Tooltip */}
            {hovering && hoveringId === "roadmaps" && showTooltip ? (
              <div className="absolute flex bg-[#1b1c1f] left-[calc(100%+16px)] w-fit whitespace-nowrap border border-[#383b41] rounded-[4px] px-2 py-[5px] text-[11px] gap-2 z-20">
                Roadmaps{" "}
                <span>
                  <kbd className="bg-[#292c33] py-0.5 px-1 font-sans rounded-[4px] border border-[#383b41]">
                    G
                  </kbd>{" "}
                  <span className="[font-size:10px] text-[#9c9da0] px-[3px]">
                    then
                  </span>{" "}
                  <kbd className="bg-[#292c33] py-0.5 px-1 font-sans rounded-[4px] border border-[#383b41]">
                    R
                  </kbd>
                </span>
              </div>
            ) : null}
          </div>
          <div
            className="flex gap-2 items-center [font-size:13px] hover:bg-[#121316] rounded-sm mr-2 px-2 py-1 cursor-pointer relative"
            onMouseEnter={() => {
              setHovering(true);
              setHoveringId("teams");
            }}
            onMouseLeave={() => {
              setHovering(false);
              setHoveringId(undefined);
            }}
          >
            <TeamsIcon hovering={hovering && hoveringId === "teams"} />
            Teams
            {/* Tooltip */}
            {hovering && hoveringId === "teams" && showTooltip ? (
              <div className="absolute flex bg-[#1b1c1f] left-[calc(100%+16px)] w-fit whitespace-nowrap border border-[#383b41] rounded-[4px] px-2 py-[5px] text-[11px] gap-2 z-20">
                Teams
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </aside>
  );
};

export default LinearTooltips;
