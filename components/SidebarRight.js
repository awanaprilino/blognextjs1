export default function SidebarRight() {
    return (
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
            <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                <div class="mb-1 tracking-wide px-4 py-4" >
                    <h2 class="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
                    <div class="border-b -mx-8 px-8 pb-3">
                        <div class="flex items-center mt-1">
                            <div class=" w-1/5 text-indigo-500 tracking-tighter">
                                <span>5 star</span>
                            </div>
                            <div class="w-3/5">
                                <div class="bg-gray-300 w-full rounded-lg h-2">
                                    <div class=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                                </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                                <span class="text-sm">51%</span>
                            </div>
                        </div>
                        <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                                <span>4 star</span>
                            </div>
                            <div class="w-3/5">
                                <div class="bg-gray-300 w-full rounded-lg h-2">
                                    <div class="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                                </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                                <span class="text-sm">17%</span>
                            </div>
                        </div>
                        <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                                <span>3 star</span>
                            </div>
                            <div class="w-3/5">
                                <div class="bg-gray-300 w-full rounded-lg h-2">
                                    <div class=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                                </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                                <span class="text-sm">19%</span>
                            </div>
                        </div>
                        <div class="flex items-center mt-1">
                            <div class=" w-1/5 text-indigo-500 tracking-tighter">
                                <span>2 star</span>
                            </div>
                            <div class="w-3/5">
                                <div class="bg-gray-300 w-full rounded-lg h-2">
                                    <div class=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                                </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                                <span class="text-sm">8%</span>
                            </div>
                        </div>
                        <div class="flex items-center mt-1">
                            <div class="w-1/5 text-indigo-500 tracking-tighter">
                                <span>1 star</span>
                            </div>
                            <div class="w-3/5">
                                <div class="bg-gray-300 w-full rounded-lg h-2">
                                    <div class=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                                </div>
                            </div>
                            <div class="w-1/5 text-gray-700 pl-3">
                                <span class="text-sm">5%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4">
                    <h3 class="font-medium tracking-tight">Review this item</h3>
                    <p class="text-gray-700 text-sm py-1">
                        give your opinion about this item.
      </p>
                    <button class="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">write a review</button>
                </div>
            </div>

        </aside>
    )
}