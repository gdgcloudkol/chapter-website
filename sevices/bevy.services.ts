export interface BevyModel {
    chapterId: number;
    page_size: number;
    status: string;
    include_cohosted_events: boolean;
    visible_on_parent_chapter_only: boolean;
    order: string;
    fields: string[];
    pageNo: number;
}

export async function FetchBevyData(bevy: BevyModel) {
    const fields = bevy.fields.join(',');
    const url = `https://gdg.community.dev/api/event_slim/?chapter=${bevy.chapterId}&page_size=${bevy.page_size}&status=${bevy.status}&include_cohosted_events=${bevy.include_cohosted_events}&visible_on_parent_chapter_only=${bevy.visible_on_parent_chapter_only}&order=${bevy.order}&fields=${fields}&page=${bevy.pageNo}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    return result;
}
