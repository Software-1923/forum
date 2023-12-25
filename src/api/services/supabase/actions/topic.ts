'use server';

import { createServerClient } from 'src/utils/supabase/server';
import { toTopic } from '../convertor';
import { ITopic } from 'src/interface';

export const getTopicById = async (id: string): Promise<ITopic> => {
  const { data } = await createServerClient()
    .from('topics')
    .select(`*`)
    .eq('id', id)
    .maybeSingle();

  if (data) return toTopic(data);

  throw new Error('Not find topic');
};

export const getTopicsByTitle = async (name: string): Promise<ITopic[]> => {
  const { data, error } = await createServerClient()
    .from('topics')
    .select(`*`)
    .ilike('name', `%${name}%`)
    .limit(8);

  if (error) console.log(error);

  return data ? data.map(item => toTopic(item)) : [];
};