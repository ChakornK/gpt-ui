"use client";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Themer } from "./components/theming.jsx";
import Link from "next/link.js";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

const Home = () => {
	return (
		<main className="relative z-0 flex w-full h-dfull text-gray-950 dark:text-gray-100 overflow-hidden">
			<Themer />
			<Tooltip.Provider delayDuration={300}>
				<Sidebar
					chatList={[
						{
							title: "Chat #1",
							url: "/",
						},
						{
							title: "Chat #2",
							url: "/",
						},
						{
							title: "Chat #3",
							url: "/",
						},
						{
							title: "Chat #4",
							url: "/",
						},
						{
							title: "Chat #5",
							url: "/",
						},
					]}
				/>
				<Chat
					messages={[
						{
							role: "user",
							content: "Hello, how are you?",
						},
						{
							role: "assistant",
							content: "I'm doing well, thank you!",
						},
						{
							role: "user",
							content: "What do you do?",
						},
						{
							role: "assistant",
							content: "I'm a chatbot.",
						},
						{
							role: "user",
							content: "How old are you?",
						},
						{
							role: "assistant",
							content: "I'm 25 years old.",
						},
						{
							role: "user",
							content: "What is your favorite color?",
						},
						{
							role: "assistant",
							content: "I don't have a favorite color.",
						},
					]}
				/>
			</Tooltip.Provider>
		</main>
	);
};
export default Home;

const Sidebar = ({ chatList }) => {
	return (
		<div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
			<div className="w-[260px] h-full">
				<div className="flex flex-col h-full min-h-0">
					<div className="flex flex-col px-3 pb-3.5 w-full h-full">
						<div className="flex-col flex-1 -mr-2 pr-2 overflow-y-auto">
							<div className="top-0 right-0 left-0 z-20 sticky pt-3.5">
								<Link
									href="/"
									className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-[0.98] dark:bg-gray-900 px-2 rounded-lg w-full h-10 font-medium transition-transform"
								>
									<div className="flex justify-center items-center bg-white shadow-[0_0_0_1px_#0001] rounded-full w-7 h-7">
										<svg
											width="41"
											height="41"
											viewBox="0 0 41 41"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="w-2/3 h-2/3 text-gray-950"
										>
											<path
												d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.80078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.80067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
												fill="currentColor"
											/>
										</svg>
									</div>
									<div className="text-ellipsis text-left text-sm whitespace-nowrap overflow-hidden grow">
										New chat
									</div>
									<RadixTooltip
										text={"New chat"}
										side={"right"}
										sideOffset={16}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
												fill="currentColor"
											/>
										</svg>
									</RadixTooltip>
								</Link>
							</div>

							{/* Chat list */}
							<div className="flex flex-col gap-2 pb-2 text-sm text-token-text-primary">
								<div className="mt-5">
									<h3 className="px-2 pt-3 pb-2 h-9 font-medium text-ellipsis text-gray-400 text-xs break-all overflow-hidden">
										Today
									</h3>
									<ol>
										{chatList.map((chat) => (
											<li
												className="relative h-auto"
												key={chat.id || chat.title}
											>
												<div className="hover:bg-gray-100 dark:hover:bg-gray-800 active:opacity-90 rounded-lg group">
													<Link
														href="/"
														className="flex items-center gap-2 p-2"
													>
														<div className="relative whitespace-nowrap overflow-hidden grow">
															{chat.title}
															<div className="group-hover:w-20 group-hover:from-gray-100 dark:group-hover:from-gray-800 group-hover:from-60% top-0 right-0 bottom-0 absolute bg-gradient-to-l from-0% from-gray-50 dark:from-gray-900 to-transparent w-8" />
														</div>
													</Link>
													<div className="group-hover:flex top-0 right-0 bottom-0 absolute items-center gap-1.5 hidden pr-2">
														<RadixTooltip
															text={"More"}
															fontSize={"text-xs"}
														>
															<div className="flex justify-center items-center text-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:text-gray-100 transition">
																<svg
																	width="18"
																	height="18"
																	viewBox="0 0 24 24"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
																		fill="currentColor"
																	/>
																</svg>
															</div>
														</RadixTooltip>
														<RadixTooltip
															text={"Archive"}
															fontSize={"text-xs"}
														>
															<div className="flex justify-center items-center text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 dark:text-gray-100 transition">
																<svg
																	width="18"
																	height="18"
																	viewBox="0 0 18 18"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		fillRule="evenodd"
																		clipRule="evenodd"
																		d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
																		fill="currentColor"
																	/>
																</svg>
															</div>
														</RadixTooltip>
													</div>
												</div>
											</li>
										))}
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Chat = ({ messages }) => {
	const [text, setText] = useState("");

	return (
		<div className="relative flex flex-col flex-1 bg-white dark:bg-gray-800 max-w-full h-full overflow-hidden">
			<div className="relative flex flex-col flex-1 w-full h-full transition-width overflow-auto">
				<div className="flex-1 overflow-hidden">
					{/* Chat feed */}
					<div className="pb-9 h-full">
						<div className="flex flex-col pb-9 h-full text-sm overflow-auto">
							{/* Top bar */}
							<div className="top-0 z-10 sticky flex justify-between items-center bg-white dark:bg-gray-800 mb-1.5 p-2 h-14 font-semibold">
								{/* Model select */}
								<button
									type="button"
									className="flex items-center gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-xl font-medium text-lg cursor-pointer group"
								>
									<p className="text-black dark:text-white">
										ChatGPT{" "}
										<span className="text-gray-500 dark:text-gray-300">
											3.5
										</span>
									</p>
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										className="text-gray-400"
									>
										<title>🔽</title>
										<path
											d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>

								{/* Share chat */}
								<div className="flex gap-2 pr-1">
									<button
										type="button"
										className="relative flex justify-center items-center border-[#0002] dark:border-[#fff2] hover:bg-gray-50 dark:hover:bg-gray-700 px-2 py-1 border rounded-lg w-9 h-9 whitespace-nowrap"
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Share</title>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 13.4477 3.44772 13 4 13Z"
												fill="currentColor"
											/>
										</svg>
									</button>
								</div>
							</div>

							{/* Chat */}
							<div className="flex-col flex-1 justify-center items-center h-full text-gray-950 dark:text-gray-50">
								{messages.map((message, index) => {
									return (
										<div
											key={index}
											className="justify-center md:gap-6 m-auto px-4 py-2 text-base"
										>
											<div
												className={`flex flex-1 gap-3 mx-auto md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] text-base group ${
													index ===
													messages.length - 1
														? "final-completion"
														: ""
												}`}
											>
												<div className="relative flex flex-col flex-shrink-0 items-end">
													<div className="pt-0.5">
														{message.role ===
														"user" ? (
															<div className="flex justify-center items-center border-[#fff3] bg-[#48877b] border rounded-full w-6 h-6 text-gray-50 text-xs">
																Y
															</div>
														) : (
															<div className="flex justify-center items-center border-[#fff3] bg-[#69c084] border rounded-full w-6 h-6 text-gray-50">
																<svg
																	width="16"
																	height="16"
																	viewBox="0 0 41 41"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
																		fill="currentColor"
																	/>
																</svg>
															</div>
														)}
													</div>
												</div>
												<div className="relative flex flex-col w-full">
													<p className="font-semibold select-none">
														{message.role === "user"
															? "You"
															: "ChatGPT"}
													</p>
													<div className="flex-col gap-1 md:gap-3">
														<div className="flex flex-col flex-grow max-w-full">
															<div className="flex flex-col items-start gap-3 min-h-[20px] text-message [.text-message+&]:mt-5 break-words whitespace-pre-wrap overflow-x-auto">
																<p>
																	{
																		message.content
																	}
																</p>
															</div>
														</div>
													</div>
													<div className="flex justify-start gap-3 empty:hidden mt-1">
														<div className="flex justify-center lg:justify-start items-center gap-[2px] mt-0 -ml-1 h-7 text-gray-400 self-end lg:self-center visible">
															{message.role ===
															"user" ? (
																<button
																	type="button"
																	class="md:group-hover:visible md:group-[.final-completion]:visible p-1 rounded-md text-token-text-tertiary hover:text-gray-950 dark:hover:text-gray-100 hover:text-token-text-primary md:invisible"
																>
																	<div class="flex items-center gap-1.5 text-xs">
																		<svg
																			width="18"
																			height="18"
																			viewBox="0 0 24 24"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				clip-rule="evenodd"
																				d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4783 6.06414 21.4783 8.93588 19.7071 10.7071L18.7073 11.7069L11.1603 19.2539C10.7182 19.696 10.1489 19.989 9.53219 20.0918L4.1644 20.9864C3.84584 21.0395 3.52125 20.9355 3.29289 20.7071C3.06453 20.4788 2.96051 20.1542 3.0136 19.8356L3.90824 14.4678C4.01103 13.8511 4.30396 13.2818 4.7461 12.8397L13.2929 4.29291ZM13 7.41422L6.16031 14.2539C6.01293 14.4013 5.91529 14.591 5.88102 14.7966L5.21655 18.7835L9.20339 18.119C9.40898 18.0847 9.59872 17.9871 9.7461 17.8397L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
																				fill="currentColor"
																			/>
																		</svg>
																	</div>
																</button>
															) : (
																<>
																	<button
																		type="button"
																		class="md:group-hover:visible md:group-[.final-completion]:visible flex items-center gap-1.5 p-1 rounded-md text-token-text-tertiary text-xs hover:text-gray-950 dark:hover:text-gray-100 hover:text-token-text-primary md:invisible"
																	>
																		<svg
																			width="18"
																			height="18"
																			viewBox="0 0 24 24"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				clip-rule="evenodd"
																				d="M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z"
																				fill="currentColor"
																			/>
																		</svg>
																	</button>
																	<button
																		type="button"
																		class="md:group-hover:visible md:group-[.final-completion]:visible flex items-center gap-1.5 p-1 rounded-md text-token-text-tertiary text-xs hover:text-gray-950 dark:hover:text-gray-100 hover:text-token-text-primary md:invisible"
																	>
																		<svg
																			width="18"
																			height="18"
																			viewBox="0 0 24 24"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				clip-rule="evenodd"
																				d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z"
																				fill="currentColor"
																			/>
																		</svg>
																	</button>
																	{index ===
																		messages.length -
																			1 && (
																		<button
																			type="button"
																			class="md:group-hover:visible md:group-[.final-completion]:visible flex items-center gap-1.5 p-1 rounded-md text-token-text-tertiary text-xs hover:text-gray-950 dark:hover:text-gray-100 hover:text-token-text-primary md:invisible"
																		>
																			<svg
																				width="18"
																				height="18"
																				viewBox="0 0 24 24"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M4.5 2.5C5.05228 2.5 5.5 2.94772 5.5 3.5V5.07196C7.19872 3.47759 9.48483 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C7.1307 21.5 3.11828 17.8375 2.565 13.1164C2.50071 12.5679 2.89327 12.0711 3.4418 12.0068C3.99033 11.9425 4.48712 12.3351 4.5514 12.8836C4.98798 16.6089 8.15708 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C9.7796 4.5 7.7836 5.46469 6.40954 7H9C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4.5C3.96064 9 3.52101 8.57299 3.50073 8.03859C3.49983 8.01771 3.49958 7.99677 3.5 7.9758V3.5C3.5 2.94772 3.94771 2.5 4.5 2.5Z"
																					fill="currentColor"
																				/>
																			</svg>
																		</button>
																	)}
																	<button
																		type="button"
																		class="md:group-hover:visible md:group-[.final-completion]:visible p-1 rounded-md text-token-text-tertiary hover:text-gray-950 dark:hover:text-gray-100 hover:text-token-text-primary md:invisible"
																	>
																		<svg
																			width="18"
																			height="18"
																			viewBox="0 0 24 24"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				clip-rule="evenodd"
																				d="M11.8727 21.4961C11.6725 21.8466 11.2811 22.0423 10.8805 21.9922L10.4267 21.9355C7.95958 21.6271 6.36855 19.1665 7.09975 16.7901L7.65054 15H6.93226C4.29476 15 2.37923 12.4921 3.0732 9.94753L4.43684 4.94753C4.91145 3.20728 6.49209 2 8.29589 2H18.0045C19.6614 2 21.0045 3.34315 21.0045 5V12C21.0045 13.6569 19.6614 15 18.0045 15H16.0045C15.745 15 15.5054 15.1391 15.3766 15.3644L11.8727 21.4961ZM14.0045 4H8.29589C7.39399 4 6.60367 4.60364 6.36637 5.47376L5.00273 10.4738C4.65574 11.746 5.61351 13 6.93226 13H9.00451C9.32185 13 9.62036 13.1506 9.8089 13.4059C9.99743 13.6612 10.0536 13.9908 9.96028 14.2941L9.01131 17.3782C8.6661 18.5002 9.35608 19.6596 10.4726 19.9153L13.6401 14.3721C13.9523 13.8258 14.4376 13.4141 15.0045 13.1902V5C15.0045 4.44772 14.5568 4 14.0045 4ZM17.0045 13V5C17.0045 4.64937 16.9444 4.31278 16.8338 4H18.0045C18.5568 4 19.0045 4.44772 19.0045 5V12C19.0045 12.5523 18.5568 13 18.0045 13H17.0045Z"
																				fill="currentColor"
																			/>
																		</svg>
																	</button>
																</>
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				{/* Chat input */}
				<div className="pt-2 md:pt-0 w-full md:w-[calc(100%-.5rem)]">
					<form className="flex flex-row gap-3 mx-2 md:mx-4 lg:mx-auto md:last:mb-6 last:mb-2 lg:max-w-2xl xl:max-w-3xl stretch">
						<div className="relative flex flex-col flex-1 h-full">
							<div className="flex items-center w-full">
								<div className="relative flex flex-col flex-grow border-gray-200 [&:has(textarea:focus)]:border-600 dark:border-gray-600 bg-white dark:bg-gray-800 [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] border rounded-2xl w-full dark:text-white overflow-hidden">
									<ReactTextareaAutosize
										placeholder="Message ChatGPT…"
										minRows={1}
										maxRows={7}
										rows={1}
										className="border-0 bg-transparent dark:bg-transparent m-0 py-[10px] md:py-3.5 pr-10 md:pr-12 pl-3 md:pl-4 w-full max-h-[25dvh] max-h-52 outline-none placeholder-black/50 resize-none focus:ring-0 focus-visible:ring-0 dark:placeholder-white/50"
										value={text}
										onChange={(e) =>
											setText(e.target.value)
										}
										autoFocus
									/>
									<button
										type="submit"
										disabled={text === ""}
										className="right-2 md:right-3 bottom-1.5 md:bottom-3 absolute dark:border-white bg-black dark:hover:bg-white dark:bg-white enabled:bg-black disabled:opacity-10 p-0.5 border border-black rounded-lg text-white disabled:text-gray-400 transition-colors"
									>
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											className="text-white dark:text-black"
										>
											<path
												d="M7 11L12 6L17 11M12 18V7"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</form>

					{/* AI disclaimer */}
					<div className="relative px-2 md:px-[60px] py-2 text-center text-gray-500 text-token-text-secondary text-xs dark:text-gray-300">
						<span>
							ChatGPT can make mistakes. Consider checking
							important information.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const RadixTooltip = ({ children, text, side, sideOffset, fontSize }) => {
	return (
		<Tooltip.Root>
			<Tooltip.Trigger>{children}</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content
					side={side || "top"}
					sideOffset={sideOffset || 4}
					className="relative flex items-center border-gray-700 bg-gray-950 shadow-md p-1 dark:border rounded-lg max-w-xs transition-opacity"
				>
					<span
						className={`flex items-center px-2 py-1 font-medium text-center text-gray-100 ${
							fontSize || "text-sm"
						} normal-case whitespace-pre-wrap`}
					>
						{text}
					</span>
					<Tooltip.Arrow className="drop-shadow-[0px_1px_0px_#2f2f2f] fill-gray-950" />
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	);
};
